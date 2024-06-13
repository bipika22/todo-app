function Button(props)
{
    // const handleClick =() =>{
    //     alert ('hello')
    // }
return(
    <button onClick={props.onClick} className ="px-3 py-2 bg-green-600 text-white rounded text-sm font-medium"> {props.title}</button>
)
}

export default Button