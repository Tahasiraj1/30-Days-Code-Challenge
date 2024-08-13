// // Q-13
function findPersonInCity(people, targetCity) {
    // Iterate through each person in the people array.
    for (const person of people) {
        // Iterate through each address of the current person.
        for (const address of person.addresses) {
            // Check if the address city matches the target city.
            if (address.city.toLowerCase() === targetCity.toLowerCase()) {
                // Return the name and email of the first matching person.
                return { name: person.name, email: person.email };
            }
        }
    }
    // Return undefined if no person is found in the target city
    return undefined;
}
const people = [
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
const result = findPersonInCity(people, "Karachi");
console.log(result);
export {};
