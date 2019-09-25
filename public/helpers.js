//select all href values
//remove special characters and spaces
//replace old href value with new value 

const pageLinks = document.links;
const regex = /%20/;

for (let i = 0; i < pageLinks.length; i++) {
    // console.log(pageLinks[i].href);
    let newLink = pageLinks[i].href.replace(regex, '_');
    pageLinks[i].href = newLink;
    console.log(newLink);
}
