// // Q-13

// class Book {
//     Title: string;
//     Author: string;
//     PublicationYear: number;
//     Genre: string;

//     constructor(Title: string, Author: string, PublicationYear: number, Genre: string) {
//         this.Title = Title;
//         this.Author = Author;
//         this.PublicationYear = PublicationYear;
//         this.Genre = Genre;
//     }

//     displayDetails() {
//         console.log(`Title: ${this.Title}`);
//         console.log(`Author: ${this.Author}`);
//         console.log(`PublicationYear: ${this.PublicationYear}`);
//         console.log(`Genre: ${this.Genre}`);
//     }

//     isRecent(): boolean {
//         const currentYear = new Date().getFullYear();
//         return currentYear - this.PublicationYear <= 5;
//     }

//     changeGenre(newGenre: string) {
//         this.Genre = newGenre;
//         console.log(`Genre has been updated to: ${this.Genre}`);
//     }

//     isAuthor(authorName: string): boolean {
//         return this.Author.toLowerCase() === authorName.toLowerCase();
//     }
// }


// const book = new Book("The Great Adventure", "John Doe", 2021, "Fiction");
// // Displays book details
// book.displayDetails()

// // Checks if the book is a recent publication
// console.log(book.isRecent());

// // Changes the genre of the book
// book.changeGenre("Adventure"); 

// // Checks if the author matches "john doe"
// console.log(book.isAuthor("john doe")); 





// Q-14

interface Address {
    street: string;
    city: string;
    state: string;
    zipcode: string;
}

interface Person {
    name: string;
    age: number;
    email: string;
    phone: string;
    addresses: Address[];
}

function findPersonInCity(people: Person[], targetCity: string):
{
    name: string;
    email: string;
} | undefined {

// Iterate through each person in the people array.
    for (const person of people) {

// Iterate through each address of the current person.
        for (const address of person.addresses) {

// Check if the address city matches the target city.
            if (address.city.toLowerCase() === targetCity.toLowerCase()) {

// Return the name and email of the first matching person.
                return {name: person.name, email: person.email}
            }
        }
    }

// Return undefined if no person is found in the target city
    return undefined;
}

const people: Person[] = [
    {
        name: "Taha",
        age: 20,
        email: "taha@example.com",
        phone: "123-456-7890",
        addresses: [
            {
            street: "123-St",
            city: "Karachi",
            state: "Sindh",
            zipcode: "75890"
            },
            {
            street: "456-St",
            city: "larhkana",
            state: "Sindh",
            zipcode: "62555"
            }
        ]
    },
    {
        name: "Noor",
        age: 18,
        email: "noor@example.com",
        phone: "098-765-4321",
        addresses: [
            {
                street: "1234-St",
                city: "Hyderabad",
                state: "Sindh",
                zipcode: "63942"
            }
        ]
    }
];

const result = findPersonInCity(people, "Karachi")
console.log(result);
