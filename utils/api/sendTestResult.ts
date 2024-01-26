export const sendTestResult = async (variant: string) => {
  try {
    const response = await fetch('api/testing', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ variant }),
    });

    if (!response.ok) {
      throw new Error('Failed to send test results');
    }
  } catch (error: any) {
    console.error('Error sending test results:', error.message);
  }
};
