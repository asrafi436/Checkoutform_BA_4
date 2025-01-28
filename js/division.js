$.ajax({
    url: 'https://bdapis.com/api/v1.2/divisions',
    type: 'GET',
    success: function(data) {
        const divisions = data.data;
        const presentDivisionSelect = $('#present-division');
        const permanentDivisionSelect = $('#permanent-division');

        // Populate Division dropdowns
        divisions.forEach(function(division) {
            const option = $('<option></option>').val(division.division).text(division.division);
            presentDivisionSelect.append(option);
            permanentDivisionSelect.append(option.clone());
        });
    },
    error: function(xhr, status, error) {
        console.error('Error fetching divisions:', error);
    }
});

// Fetch districts based on selected division using AJAX
function fetchDistricts(division, districtSelectId) {
    $.ajax({
        url: `https://bdapis.com/api/v1.2/division/${division.toLowerCase()}`,
        type: 'GET',
        success: function(data) {
            const districts = data.data;
            const districtSelect = $(`#${districtSelectId}`);
            districtSelect.empty().append('<option value="">Select District</option>'); // Reset the district dropdown

            // Populate District dropdown based on division
            districts.forEach(function(district) {
                const option = $('<option></option>').val(district.district).text(district.district);
                districtSelect.append(option);
            });
        },
        error: function(xhr, status, error) {
            console.error('Error fetching districts:', error);
        }
    });
}

// Event listener for Present Division change
$('#present-division').on('change', function() {
    const selectedDivision = $(this).val();
    if (selectedDivision) {
        fetchDistricts(selectedDivision, 'present-district');
    }
});

// Event listener for Permanent Division change
$('#permanent-division').on('change', function() {
    const selectedDivision = $(this).val();
    if (selectedDivision) {
        fetchDistricts(selectedDivision, 'permanent-district');
    }
});