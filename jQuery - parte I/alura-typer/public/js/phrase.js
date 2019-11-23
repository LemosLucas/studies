function initializeWords() {
    let phrase = $('.phrase').text();
    let words = phrase.split(' ').length; // Counting number of white spaces
    $('#nb-words').text(words);
}

function updateCharacterCount() {
    $('.type-area').on('input', () => {
        let textTyped = $('.type-area').val();
        let phraseToFollow = $('.phrase').text();
        let words = textTyped.split(/\S+/).length - 1;
        let characters = textTyped.length;

        // Add number of characters and words typed
        $('#nb-words-typed').text(words);
        $('#nb-char-typed').text(characters);
    });
}

function validateWordsTyped() {
    $('.type-area').on('input', () => {
        let textTyped = $('.type-area').val();
        let phraseToFollow = $('.phrase').text();

        // Checking if the current words typed are exactly the ones provided
        if (phraseToFollow.startsWith(textTyped)) {
            // Text typed matches the example provided
            $('.type-area').addClass('type-area-success');
            $('.type-area').removeClass('type-area-fail');
        } else {
            // Text typed does not match the example provided
            $('.type-area').addClass('type-area-fail');
            $('.type-area').removeClass('type-area-success');
        }
    })
}