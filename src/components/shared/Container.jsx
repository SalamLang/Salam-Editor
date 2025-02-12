// eslint-disable-next-line react/prop-types
const Container = ({ children }) => {

    return (<>
       <div className="grid_container">
           { children }
       </div>
    </>)
}

export default Container;