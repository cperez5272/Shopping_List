$(function(){
    $('#js-shopping-list-form').on('submit',function(event){
        event.preventDefault()
        let toAdd = $('#shopping-list-entry').val()
        const newItem = createListItem(toAdd)
        $('.shopping-list').prepend(newItem)
        $('#shopping-list-entry').val('')
        console.log('clicked')

        $(".shopping-item-controls").find('.shopping-item-toggle').click(function(event) {
            $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked')
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