var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }
];

library.forEach(element => {
    console.log(element.title.toUpperCase() + " by " + element.author.toUpperCase() +  " " + element.readingStatus.toString().toUpperCase())
});