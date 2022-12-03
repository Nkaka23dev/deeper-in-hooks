const Button = ({name}) => {
    return (
      <>
        <button className="rounded-xl px-8 py-4 hover:bg-red-700 bg-red-400 text-white font-semibold" >{name}</button>
      </>
    )
}

export default Button