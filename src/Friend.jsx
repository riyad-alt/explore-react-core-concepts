export default function Friend({friend}){
  const {name,email,id} = friend;
    return(
        <div className="box">
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
        <p>id :{id} </p>
        </div>
     
    )
}