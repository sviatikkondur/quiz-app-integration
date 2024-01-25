export const sendQuizResults = async (email: string) => {
  try {
    const response = await fetch('api/quiz', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error('Failed to send quiz results');
    }

    console.log('Received quiz results:', { email });
  } catch (error: any) {
    console.error('Error sending quiz results:', error.message);
  }
};
