$(document).on('click', '#add-education', function() {
    // Create new row with the necessary fields
    var newRow = `<tr>
        <td>
            <select class="form-select" name="qualification[]" required>
                <option value="SSC">SSC</option>
                <option value="HSC">HSC</option>
                <option value="BBA/BSC">BBA/BSC</option>
                <option value="Diploma">Diploma</option>
                <option value="MBA/MSc">MBA/MSc</option>
            </select>
        </td>
        <td><input type="text" class="form-control" name="institution[]" placeholder="Institution Name" required></td>
        <td><input type="text" class="form-control" name="subject[]" placeholder="Subject" required></td>
        <td><input type="text" class="form-control" name="cgpa[]" placeholder="CGPA" required></td>
        <td><input type="text" class="form-control" name="graduationYear[]" placeholder="Graduation Year" required></td>
        <td>
            <button type="button" class="btn text-danger remove-row">
                <i class="bi bi-trash"></i>
            </button>
        </td>
    </tr>`;

    // Append the new row to the table
    $('#education-container tbody').append(newRow);
});

// Remove row functionality
$(document).on('click', '.remove-row', function() {
    // Remove the row that contains the clicked Remove button
    $(this).closest('tr').remove();
});
