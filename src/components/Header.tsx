import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faHeart } from '@fortawesome/free-solid-svg-icons'

export function Header() {
  return (
    <header className="flex justify-between items-center h-20 border-b border-borderAndLine">
      <div className="flex border border-borderAndLine ml-6 w-2/5 px-3 rounded">
        <input
          placeholder="Buscar usuário"
          id="term"
          name="term"
          className="text-placeholder flex-1 h-10"
        />
        <button type="button">
          <FontAwesomeIcon icon={faSearch} className="text-placeholder " />
        </button>
      </div>
      <button type="button" className="text-white bg-primary h-20 px-6">
        <FontAwesomeIcon icon={faHeart} /> Favoritos
      </button>
    </header>
  )
}
