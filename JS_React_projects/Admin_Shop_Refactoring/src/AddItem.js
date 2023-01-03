export default function AddItems(props) {
    return(
        <form onSubmit={props.onFormSubmit}>
            <div>
                <label htmlFor="name">Название товара: </label>
                <input
                    type="text"
                    placeholder="Кольцо всевластия"
                    className="ui-textfield"
                    id="name"
                    value={props.name}
                    onChange={(e) => props.setName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="desc">Описание товара: </label>
                <input
                    type="text"
                    placeholder="Порабощение вселенной"
                    className="ui-textfield"
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
                    className="ui-button"
                    value="Добавить"
                />
            </div>
    </form>
    )
}