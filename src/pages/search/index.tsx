import Image from 'next/image'
import POPLESRCH from '../../../public/people_search.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Search() {
  return (
    <div className="flex flex-1 flex-col justify-center items-center">
      <h1 className="text-greyNeutral">Procure pelo Nome ou Nome de Usuário</h1>
      <h5 className="text-greyNeutral">
        Encontre os repositórios de algum usuário digitando no campo acima
      </h5>
      <Image src={POPLESRCH} alt="" className="mt-12" />
    </div>
  )
}
