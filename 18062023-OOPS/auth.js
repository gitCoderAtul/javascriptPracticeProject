class Userinfo{
    userdetails = [
        {username:"user1", password:1234},
        {username:"user2", password:1234},
        {username:"user3", password:1234},
        {username:"user4", password:1234},
    ];

    auth(uname,upass){
        console.log('check user details', uname, upass);
        console.log(this);
        console.log(this.userdetails);

        var result = this.userdetails.filter(val => val.username==uname && val.password == upass);
        console.log(result);
        return result.length
    }

}
class Userinfo1{

}

// export default Userinfo;

export {Userinfo,Userinfo1}
