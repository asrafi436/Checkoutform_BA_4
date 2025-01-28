$(document).on('click', '#add-experience', function() {
    // Create new row with the necessary fields
    var newRow = `<tr>
        <td><input type="text" class="form-control" name="jobTitle[]" placeholder="Job Title" required></td>
        <td><input type="text" class="form-control" name="companyName[]" placeholder="Company Name" required></td>
        <td><input type="text" class="form-control" name="duration[]" placeholder="Duration" required></td>
        <td>
            <button type="button" class="btn text-danger remove-row">
                <i class="bi bi-trash"></i> 
            </button>
        </td>
    </tr>`;

    // Append the new row to the table
    $('#experience-container tbody').append(newRow);
});

// Remove row functionality
$(document).on('click', '.remove-row', function() {
    // Remove the row that contains the clicked Remove button
    $(this).closest('tr').remove();
});