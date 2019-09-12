$(function(){
    $('#js-shopping-list-form').on('submit',function(event){
        event.preventDefault()
        let toAdd = $('#shopping-list-entry').val()
        const newItem = createListItem(toAdd)
        $('.shopping-list').prepend(newItem)
        $('#shopping-list-entry').val('')
        console.log('clicked')
// TWO: check and uncheck items on the list by clicking the "Check" button (everything above working as intended... kind of.)

        $(".shopping-item-controls").find('.shopping-item-toggle').click(function(event) {
            const target = event.target.parentNode.parentNode.parentNode.children[0]
            target.classList.toggle('shopping-item__checked')
            console.log(target.classList)
            
        //    $(this).closest('li').find('.shopping-item').toggleClass('.shopping-item__checked')
        //    console.log(this.closest('li').find('.shopping-item'))
    
        });

        $(".shopping-item-controls").find('.shopping-item-delete').click(function() {
        
            $(this).closest('li').remove()
    
        });

    })
});


const createListItem = (item) => {
    const listItem = `<li>
        <span class="shopping-item">${item}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`
      return listItem
}



// THREE: permanently remove items from the list
// Additionally:

// ONE: You must use a CDN-hosted version of jQuery
// TWO: Put your application code in a file called index.js and link to it in index.html
// THREE: Be sure to put both script elements at the bottom of the <body> element.
// FOUR: Do not alter index.html or main.css other than adding the links to the external JavaScript inside index.html. Write JavaScript code that works with the existing HTML and CSS to implement the required features.
// FIVE: Hint: you may find it helpful to read up on and use the following jQuery methods: .submit(), preventDefault(), toggleClass(), and closest().

