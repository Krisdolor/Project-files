const heroData = [
    {
        imgPath: "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        contentText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio culpa amet facilis aliquam nulla, tempora rem error esse ipsam est ullam. Consectetur nobis tenetur aliquid?",
        profile: "Sam Jackson, COO"
    },
    {
        imgPath: "https://plus.unsplash.com/premium_photo-1674180320209-731214a7426d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnN8ZW58MHx8MHx8fDA%3D",
        contentText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio culpa amet facilis aliquam nulla, tempora rem error",
        profile: "Amen Kris, Founder"
    },
    {
        imgPath: "https://media.istockphoto.com/id/1779891370/photo/portrait-tablet-and-black-woman-designer-in-an-office-for-planning-strategy-or-creative.webp?b=1&s=170667a&w=0&k=20&c=kZ5xX_Bf8O4A9dNCKUkn4f_Xzze22w6eq1TdqLE3xy8=",
        contentText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio culpa amet facilis aliquam nulla, tempora rem error esse ips",
        profile: "Jesse Cyril, CEO"
    },
    {
        imgPath: "https://plus.unsplash.com/premium_photo-1664541336692-e931d407ba88?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29uc3xlbnwwfHwwfHx8MA%3D%3D",
        contentText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio culpa amet facilis aliquam nulla, tempora rem error esse ipsam est ullam. Consectetur nobis tenetur aliq",
        profile: "Uzor James, CSO"
    }

]

//grab the html elements
const imgElem = document.getElementById("photo");
const contentElem = document.querySelector(".content");
const nameElem = document.querySelector(".name");

// set the initial position to 0
let index = 0;
//create a function that populate the container with new data 
function updateContainerElem() {
    // destruct the heroData
    const { imgPath, contentText, profile } = heroData[index];
    imgElem.src = imgPath;
    contentElem.innerText = contentText;
    nameElem.innerText = profile;
    index++;

    if (index === heroData.length) {
        index = 0;
    }

    setTimeout(() => {
        updateContainerElem()
    }, 3000)

}

updateContainerElem();