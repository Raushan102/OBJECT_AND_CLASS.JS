/*You are working on an e-commerce website where customers can add items to their cart. The cart stores the
quantity of each item that the customer wants to purchase in an array of numbers. However, the website is
currently experiencing a bug where the quantity of each item is being recorded incorrectly by reducing it to
half. As a result, you need to write a JavaScript function that can double the quantity of each item in the cart
array to correct the bug. */


let itemQuantity=[2,3,4,5,54,6,7,8,86];

function rightItemQuantity(bugQuantity_Of_Array)
{

    for(let i=0; i<bugQuantity_Of_Array.length; i++)
    {
        console.log(bugQuantity_Of_Array[i]*2);
    }

}


rightItemQuantity(itemQuantity);
