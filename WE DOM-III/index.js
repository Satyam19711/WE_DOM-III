document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const tbody = document.querySelector('tbody');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const taskInput = document.getElementById('task');
      const prioritySelect = document.getElementById('priority');
  
      const taskName = taskInput.value.trim();
      const priorityValue = prioritySelect.value;
  
      if (taskName && priorityValue) {
        const newRow = document.createElement('tr');
        const taskCell = document.createElement('td');
        const priorityCell = document.createElement('td');
        const favCell = document.createElement('td');
  
        taskCell.textContent = taskName;
        priorityCell.textContent = priorityValue;
  
        newRow.appendChild(taskCell);
        newRow.appendChild(priorityCell);
        newRow.appendChild(favCell);
  
        tbody.appendChild(newRow);
  
        if (priorityValue === 'High') {
          newRow.style.backgroundColor = 'red';
        } else {
          newRow.style.backgroundColor = 'green';
        }
      }
  
      // Reset form after submission
      form.reset();
    });
  });
  