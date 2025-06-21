const PROGRESS_KEY = 'js-learning-progress';

export const getProgress = (): boolean[] => {
  const saved = localStorage.getItem(PROGRESS_KEY);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.error('Error parsing progress data:', e);
    }
  }
  // Return array of 25 false values for new users
  return new Array(25).fill(false);
};

export const markQuestionComplete = (questionIndex: number): void => {
  const progress = getProgress();
  progress[questionIndex] = true;
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
};

export const markQuestionIncomplete = (questionIndex: number): void => {
  const progress = getProgress();
  progress[questionIndex] = false;
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
};

export const resetProgress = (): void => {
  localStorage.removeItem(PROGRESS_KEY);
};

export const getCompletionStats = () => {
  const progress = getProgress();
  const completed = progress.filter(Boolean).length;
  const total = progress.length;
  const percentage = Math.round((completed / total) * 100);
  
  return {
    completed,
    total,
    percentage,
    remaining: total - completed
  };
};