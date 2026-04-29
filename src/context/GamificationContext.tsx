import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from '@/hooks/use-toast';
import { Trophy, Star, Zap } from 'lucide-react';

export interface Achievement {
  id: string;
  title: string;
  description: string;
}

export const ACHIEVEMENTS: Record<string, Achievement> = {
  explorer: {
    id: 'explorer',
    title: 'The Explorer',
    description: 'Visited all main pages on the portfolio.',
  },
  keen_eye: {
    id: 'keen_eye',
    title: 'Keen Eye',
    description: 'Found the hidden easter egg.',
  },
  networker: {
    id: 'networker',
    title: 'Networker',
    description: 'Clicked on professional social links.',
  },
  a11y_champ: {
    id: 'a11y_champ',
    title: 'Accessibility Champion',
    description: 'Tested the web accessibility features.',
  }
};

interface GamificationContextType {
  xp: number;
  level: number;
  unlockedAchievements: string[];
  completedActions: string[];
  addXP: (amount: number, actionId: string, message?: string) => void;
  unlockAchievement: (achievementId: string) => void;
  resetProgress: () => void;
}

const GamificationContext = createContext<GamificationContextType | undefined>(undefined);

export const GamificationProvider = ({ children }: { children: React.ReactNode }) => {
  const [xp, setXP] = useState(0);
  const [level, setLevel] = useState(1);
  const [unlockedAchievements, setUnlockedAchievements] = useState<string[]>([]);
  const [completedActions, setCompletedActions] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from local storage
  useEffect(() => {
    const savedData = localStorage.getItem('portfolio-gamification');
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        setXP(parsed.xp || 0);
        setLevel(parsed.level || 1);
        setUnlockedAchievements(parsed.unlockedAchievements || []);
        setCompletedActions(parsed.completedActions || []);
      } catch (e) {
        console.error("Failed to parse gamification data");
      }
    }
    setIsLoaded(true);
  }, []);

  // Save to local storage
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('portfolio-gamification', JSON.stringify({
        xp, level, unlockedAchievements, completedActions
      }));
    }
  }, [xp, level, unlockedAchievements, completedActions, isLoaded]);

  const addXP = (amount: number, actionId: string, message?: string) => {
    if (!isLoaded || completedActions.includes(actionId)) return;

    setCompletedActions(prev => [...prev, actionId]);
    
    setXP(prevXP => {
      const newXP = prevXP + amount;
      const newLevel = Math.floor(newXP / 100) + 1;
      
      if (newLevel > level) {
        setLevel(newLevel);
        toast({
          title: `🎉 Level Up! You are now Level ${newLevel}`,
          description: "You've earned enough XP to level up. Keep exploring!",
          duration: 4000,
        });
      } else if (message) {
        toast({
          title: `+${amount} XP`,
          description: message,
          duration: 3000,
        });
      }
      return newXP;
    });
  };

  const unlockAchievement = (achievementId: string) => {
    if (!isLoaded || unlockedAchievements.includes(achievementId)) return;

    setUnlockedAchievements(prev => [...prev, achievementId]);
    const achievement = ACHIEVEMENTS[achievementId];
    
    if (achievement) {
      // Award bonus XP for achievement without triggering another toast for XP immediately to avoid toast spam
      setXP(prevXP => prevXP + 50);
      
      setTimeout(() => {
        toast({
          title: "🏆 Achievement Unlocked!",
          description: achievement.title,
          duration: 5000,
        });
      }, 500); // Slight delay for dramatic effect
    }
  };

  const resetProgress = () => {
    setXP(0);
    setLevel(1);
    setUnlockedAchievements([]);
    setCompletedActions([]);
    localStorage.removeItem('portfolio-gamification');
    toast({
      title: "Progress Reset",
      description: "Your gamification progress has been cleared.",
    });
  };

  // Special checker for "The Explorer" achievement
  useEffect(() => {
    if (!isLoaded) return;
    
    const pages = ['visit_home', 'visit_about', 'visit_experience', 'visit_projects', 'visit_contact'];
    const hasVisitedAll = pages.every(page => completedActions.includes(page));
    
    if (hasVisitedAll && !unlockedAchievements.includes('explorer')) {
      unlockAchievement('explorer');
    }
  }, [completedActions, unlockedAchievements, isLoaded]);

  return (
    <GamificationContext.Provider value={{ xp, level, unlockedAchievements, completedActions, addXP, unlockAchievement, resetProgress }}>
      {children}
    </GamificationContext.Provider>
  );
};

export const useGamification = () => {
  const context = useContext(GamificationContext);
  if (context === undefined) {
    throw new Error('useGamification must be used within a GamificationProvider');
  }
  return context;
};
