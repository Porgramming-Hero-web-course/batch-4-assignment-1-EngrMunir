{
    interface Profile {
        name: string;
        age:number;
        email:string
    }

    type UpdateProfile ={
        name?:string;
        age?:number;
        email?:string
    }

    function updateProfile(profile: Profile, updates: UpdateProfile): Profile {
        return { ...profile, ...updates };
    }

    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(updateProfile(myProfile, { age: 26 }));

}