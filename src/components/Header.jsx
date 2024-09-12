import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <div className="containerButton">
        <button>
            <Link to={`/`}>
                Список пользователей
            </Link>
        </button>
        <button>
            <Link to={`/user/MariaOstanina`}>
                Пользователь
            </Link>
        </button>
      </div>
    )
}