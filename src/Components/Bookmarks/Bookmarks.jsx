
const Bookmarks = ({read}) => {
    console.log(read)
    return (
        <div>
            <p className="shadow-md p-3">{read.title}</p>
        </div>
    );
};

export default Bookmarks;