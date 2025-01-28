$(document).ready(function() {
    // Initialize Select2
    $('#skills-select').select2();
  
    // Load job skills dynamically based on selected job
    $('#job-select').change(function() {
      var job = $(this).val();
      if (job) {
        // Update the path to your JSON file location
        $.getJSON('../json/jobSkill.json', function(data) {
          var skills = data[job] || [];
          var options = skills.map(function(skill) {
            return '<option value="' + skill + '">' + skill + '</option>';
          });
          $('#skills-select').html(options);
          $('#skills-select').trigger('change');
        });
      } else {
        $('#skills-select').html('');
      }
    });
  
    // Handle form submission
    $('#submit-btn').click(function() {
      var selectedSkills = $('#skills-select').val();
      alert('Selected Skills: ' + selectedSkills.join(', '));
    });
  });
  