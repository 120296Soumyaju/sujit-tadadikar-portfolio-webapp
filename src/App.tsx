
import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
// Import Loading component
import { Skeleton } from "@/components/ui/skeleton";

// Lazy loaded components
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Experience = lazy(() => import("./pages/Experience"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Loading fallback component
const PageLoading = () => (
  <div className="flex flex-col gap-4 p-12">
    <Skeleton className="h-12 w-3/4 mx-auto" />
    <Skeleton className="h-8 w-1/2 mx-auto" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      {[1, 2, 3].map(i => (
        <Skeleton key={i} className="h-40 w-full rounded-xl" />
      ))}
    </div>
  </div>
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={
              <Suspense fallback={<PageLoading />}>
                <Home />
              </Suspense>
            } />
            <Route path="about" element={
              <Suspense fallback={<PageLoading />}>
                <About />
              </Suspense>
            } />
            <Route path="experience" element={
              <Suspense fallback={<PageLoading />}>
                <Experience />
              </Suspense>
            } />
            <Route path="projects" element={
              <Suspense fallback={<PageLoading />}>
                <Projects />
              </Suspense>
            } />
            <Route path="contact" element={
              <Suspense fallback={<PageLoading />}>
                <Contact />
              </Suspense>
            } />
          </Route>
          <Route path="*" element={
            <Suspense fallback={<PageLoading />}>
              <NotFound />
            </Suspense>
          } />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
