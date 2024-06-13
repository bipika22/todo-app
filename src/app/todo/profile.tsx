//create a profile component show name,email,age,nationality,location

export default function Profile(){

    const person =
        {
            name:"Bipika Ghimire",
            email: "bipika.ghimire@gmail.com",
            age:16,
            nationality:"Nepali",
            location:"Nepal",
        }

return (
    <div>
        <h1>Name:{person.name}</h1>
        <h1>Age:{person.age}</h1>
        <h1>email:{person.email}</h1>
        <h1>nationality: {person.nationality}</h1>
        <h1>location: {person.location} </h1>

    </div>
)
}