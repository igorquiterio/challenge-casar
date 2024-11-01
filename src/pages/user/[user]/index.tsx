import { fetchData } from '@/services/api'
import dayjs from 'dayjs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import TAKEN from '../../../../public/taken.svg'

interface ErrorReq {
  status?: string | null
  message?: string | null
}

interface UserInfo extends ErrorReq {
  login: string | null
  name: string | null
  avatar_url: string
  bio: string | null
}

interface UserRepo {
  name: string
  description: string
  language: string
  updated_at: string
}

interface UserProps {
  user: UserInfo
  repos: UserRepo | ErrorReq
}

export default function User({ repos, user }: UserProps) {
  console.log(user)
  return (
    <>
      {user.message === null ? (
        <div className="flex p-6 gap-12">
          <div className="flex flex-col justify-between items-center w-[28rem] h-[26.25rem] border-borderAndLine border px-6 py-10 rounded">
            <Image
              src={user.avatar_url}
              alt=""
              className="rounded-full"
              width={200}
              height={200}
            />
            <div className="text-center">
              <h1 className="text-greyNeutral">{user.name}</h1>
              <p className="text-greyDark">@{user.login}</p>
            </div>
            <p className="text-greyDark text-center">{user.bio}</p>
          </div>
          <div className="flex flex-1 flex-col gap-4">
            <h1 className="text-primary">Repositórios</h1>
            {Array.isArray(repos) &&
              repos.map(repo => {
                return (
                  <div
                    key="name"
                    className="flex h-36 p-4 border border-borderAndLine rounded"
                  >
                    <div className="flex flex-1 flex-col">
                      <h2 className="text-greyNeutral">{repo.name}</h2>
                      <p className="text-placeholder">{repo.description}</p>
                      <div className="flex mt-auto gap-6 text-greyNeutral">
                        {repo.language !== null && (
                          <p className="flex gap-2 items-center">
                            {repo.language}
                          </p>
                        )}

                        <p>
                          Updated on{' '}
                          {dayjs(repo.updated_at).format('DD MMM YYYY')}
                        </p>
                      </div>
                    </div>
                    <div>
                      <button type="button">
                        <FontAwesomeIcon icon={faHeartRegular} />
                      </button>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
      ) : (
        <div className="flex flex-1 flex-col justify-center items-center">
          <h1 className="text-primary">“MHshdahsudl”</h1>
          <h1 className="text-greyNeutral">Nenhum usuário encontrado</h1>
          <h5 className="text-greyNeutral">
            Verifique se a escrita está correta ou tente novamente
          </h5>
          <Image src={TAKEN} alt="" className="mt-12" />
        </div>
      )}
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const user = String(params?.user)

  console.log(`users/${process.env.GIT_TOKEN}`)

  const userInfo: UserInfo = await fetchData({
    path: `users/${user}`,
    method: 'GET',
  })

  const userData = {
    name: userInfo.name || null,
    avatar_url: userInfo.avatar_url || null,
    login: userInfo.login || null,
    bio: userInfo.bio || null,
    status: userInfo.status || null,
    message: userInfo.message || null,
  }

  const userRepos: UserRepo[] | ErrorReq = await fetchData({
    path: `users/${user}/repos`,
    method: 'GET',
  })

  const reposData = Array.isArray(userRepos)
    ? userRepos.map(repo => ({
        name: repo.name,
        description: repo.description,
        language: repo.language,
        updated_at: repo.updated_at || null,
      }))
    : { status: userRepos.status, message: userRepos.message }

  return {
    props: {
      user: userData,
      repos: reposData,
    },
    revalidate: 60 * 60 * 2, // 2 horas
  }
}
