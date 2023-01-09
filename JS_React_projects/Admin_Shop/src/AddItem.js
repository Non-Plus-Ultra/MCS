export default function AddItems(props) {
    return(
        <form onSubmit={props.onFormSubmit}>
            <div class="m-5">
                <label htmlFor="name">Название товара: </label>
                <input
                    type="text"
                    placeholder="Кольцо всевластия"
                    class="px-1 py-1 border border-light-gray rounded w-1/3 text-base m-5"
                    id="name"
                    value={props.name}
                    onChange={(e) => props.setName(e.target.value)}
                />
            </div>
            <div class="m-5">
                <label htmlFor="desc">Описание товара: </label>
                <input
                    type="text"
                    placeholder="Порабощение вселенной"
                    class="px-1 py-1 border border-light-gray rounded w-1/3 text-base m-5"
                    id="desc"
                    value={props.desc}
                    onChange={(e) => props.setDesc(e.target.value)}
                />
            </div>
            <div className="form-footer">
                {((props.name === "" && props.desc !== "") || (props.name !== "" && props.desc === "")) && (
                    <div className="validation">Заполните все поля!</div>
                )}
                <input
                    type="submit"
                    disabled={props.name === "" || props.desc === ""}
                    class="m-5 px-10 py-5 shadow-lg rounded bg-blue-700 text-white cursor-pointer disabled:opacity-40 disabled:cursor-default"
                    value="Добавить"
                />
            </div>
    </form>
    )
}