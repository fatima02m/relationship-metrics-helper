
import React, { useEffect } from "react";
import QuizIntro from "@/components/QuizIntro";
import QuizResults from "@/components/QuizResults";
import { useQuiz } from "@/hooks/useQuiz";
import QuizContainer from "@/components/QuizContainer";
import QuizFooter from "@/components/QuizFooter";
import QuizLengthToggle from "@/components/QuizLengthToggle";

const Index = () => {
  const quiz = useQuiz();
  const { 
    quizStarted, 
    quizCompleted, 
    primaryType, 
    currentPath, 
    answers, 
    startQuiz, 
    restartQuiz, 
    useFullQuiz,
    toggleQuizLength
  } = quiz;

  // Function for Wix to call from outside
  // Export this function to the window for external access
  useEffect(() => {
    // @ts-ignore
    window.startDivorceQuiz = startQuiz;
    // @ts-ignore
    window.restartDivorceQuiz = restartQuiz;
    // @ts-ignore
    window.toggleQuizLength = toggleQuizLength;
    
    return () => {
      // Clean up when component unmounts
      // @ts-ignore
      delete window.startDivorceQuiz;
      // @ts-ignore
      delete window.restartDivorceQuiz;
      // @ts-ignore
      delete window.toggleQuizLength;
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-clean-beige py-12 px-4 font-georgia">
      <div className="w-full max-w-3xl">
        {!quizStarted && !quizCompleted && (
          <>
            <QuizIntro onStart={startQuiz} />
            <QuizLengthToggle 
              useFullQuiz={useFullQuiz} 
              toggleQuizLength={toggleQuizLength} 
            />
          </>
        )}

        {quizStarted && !quizCompleted && (
          <QuizContainer quiz={quiz} />
        )}

        {quizCompleted && (
          <QuizResults 
            primaryType={primaryType}
            path={currentPath}
            answers={answers}
            onRestart={restartQuiz}
          />
        )}
      </div>
      
      {/* Footer with The Clean Divorce branding */}
      {!quizCompleted && <QuizFooter />}
    </div>
  );
};

export default Index;
