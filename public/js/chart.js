const ChartData = async () => {
    const response = await fetch('/api/matrix/chart');
    const data = await response.json();
    const chart = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(chart, {
      type: 'bar',
      data: data,
      options: {}
    });
  };
  ChartData();


  const trendData = async () => {
    const response = await fetch('/api/matrix/trends');
    const data = await response.json();
    const popularWorkoutsList = document.getElementById('trendingList');
  
    popularWorkoutsList.innerHTML = '';
    data.forEach(workout => {
      const li = document.createElement('li');
      li.textContent = `${workout.exercise_name} - ${workout.workouts} (${workout.count})`;
      popularWorkoutsList.appendChild(li);
    });
  }
  // trendData(); Error - Review after chart completion
