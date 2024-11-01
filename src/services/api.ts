function getFetchUrl(path: string, queryParams?: Record<string, string>) {
  const fetchUrl = new URL(
      `https://api.github.com/${path}`
  )

  if (queryParams) {
      Object.entries(queryParams).map(([key, value]) => {
          fetchUrl.searchParams.append(key, value)
      })
  }

  return fetchUrl
}

type FetchDataProps = {
  path: string
  queryParams?: Record<string, string>
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  body?: BodyInit
  authorization?: string
  contentType?: string
}

export async function fetchData<T>({
  path,
  queryParams,
  body,
  contentType = 'application/json',
  method = 'GET'
}: FetchDataProps): Promise<T> {
  const fetchUrl = getFetchUrl(path, queryParams)

  const customHeaders = new Headers({
    'Authorization': `Bearer ${process.env.GIT_TOKEN}`,
    'User-Agent' : `${process.env.USER_AGENT}`,
    'X-GitHub-Api-Version': '2022-11-28',
    'Accept': 'application/vnd.github+json'
  })


  if (contentType) customHeaders.append('Content-Type', contentType)

  const response = await fetch(fetchUrl, {
      headers: customHeaders,
      method,
      body
  })

  return (await response.json()) as T
}