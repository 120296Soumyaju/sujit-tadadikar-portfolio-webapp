import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGamification, ACHIEVEMENTS } from '@/context/GamificationContext';
import { Trophy, Star, X, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

export const GamificationHUD = () => {
  const { xp, level, unlockedAchievements, resetProgress } = useGamification();
  const [isOpen, setIsOpen] = useState(false);

  // Calculate progress to next level
  const currentLevelXP = (level - 1) * 100;
  const nextLevelXP = level * 100;
  const progressPercent = ((xp - currentLevelXP) / 100) * 100;

  return (
    <>
      {/* Floating HUD Widget */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-4 left-4 z-50 flex items-center gap-3 bg-white/90 backdrop-blur-md p-2 pl-4 pr-2 rounded-full shadow-lg border border-gray-100 cursor-pointer hover:shadow-xl transition-all"
        onClick={() => setIsOpen(true)}
      >
        <div className="flex flex-col">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Level {level}</span>
          <div className="w-24 h-1.5 bg-gray-100 rounded-full mt-1 overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-primary to-blue-400 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </div>
        <div className="bg-primary/10 p-2 rounded-full text-primary">
          <Star size={16} className="fill-primary" />
        </div>
      </motion.div>

      {/* Expanded Achievements Modal/Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed bottom-20 left-4 z-50 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
          >
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-6 text-white relative">
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary/50 flex items-center justify-center shadow-inner">
                  <span className="text-2xl font-bold">{level}</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl">Your Profile</h3>
                  <p className="text-blue-200 text-sm">{xp} / {nextLevelXP} XP</p>
                </div>
              </div>
              
              <Progress value={progressPercent} className="h-2 bg-white/10" />
              <p className="text-xs text-white/60 mt-2 text-right">{100 - (xp % 100)} XP to Next Level</p>
            </div>
            
            <div className="p-4 max-h-80 overflow-y-auto">
              <h4 className="font-semibold text-gray-900 flex items-center gap-2 mb-3">
                <Trophy size={16} className="text-yellow-500" />
                Achievements
              </h4>
              
              <div className="space-y-3">
                {Object.values(ACHIEVEMENTS).map((achievement) => {
                  const isUnlocked = unlockedAchievements.includes(achievement.id);
                  
                  return (
                    <div 
                      key={achievement.id}
                      className={`flex gap-3 p-3 rounded-xl border ${
                        isUnlocked 
                          ? 'border-green-100 bg-green-50/50' 
                          : 'border-gray-100 bg-gray-50 opacity-60 grayscale'
                      }`}
                    >
                      <div className={`p-2 rounded-full flex-shrink-0 h-10 w-10 flex items-center justify-center ${
                        isUnlocked ? 'bg-white shadow-sm' : 'bg-gray-200'
                      }`}>
                        {isUnlocked ? <Trophy className="h-5 w-5 text-yellow-500" /> : <div className="h-2 w-2 rounded-full bg-gray-400" />}
                      </div>
                      <div>
                        <h5 className={`font-semibold text-sm ${isUnlocked ? 'text-gray-900' : 'text-gray-500'}`}>
                          {achievement.title}
                        </h5>
                        <p className="text-xs text-gray-500 mt-0.5 leading-snug">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
                <span className="text-xs text-gray-400">Keep exploring to earn XP!</span>
                <Button variant="ghost" size="sm" onClick={resetProgress} className="text-xs text-red-500 hover:text-red-600 hover:bg-red-50 h-7 px-2">
                  Reset Progress
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
