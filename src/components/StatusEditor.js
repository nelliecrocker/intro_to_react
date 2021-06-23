function StatusEditor({setCurrentStatus}) {
    return(
        <form>
            <label>Set your status!</label>
            <input onChange={(e)=> {setCurrentStatus(e.target.value)}}></input>
        </form>
    )
}

export default StatusEditor