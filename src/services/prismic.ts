import * as prismic from '@prismicio/client'
import { enableAutoPreviews } from '@prismicio/next'
import sm from '../../sm.json'

interface PrismicConfig {
  req?: prismic.HttpRequestLike | unknown
  previewData: {}
}

export const endpoint: string = sm.apiEndpoint
export const repositoryName: string = prismic.getRepositoryName(endpoint)

// Update the Link Resolver to match your project's route structure
export function linkResolver(doc) {
  switch (doc.type) {
    case 'homepage':
      return '/'
    case 'page':
      return `/${doc.uid}`
    default:
      return null
  }
}

// This factory function allows smooth preview setup
export function createClient(config: PrismicConfig): prismic.Client {
  const client = prismic.createClient(process.env.PRISMIC_ENDPOINT, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN
  });

  enableAutoPreviews({
    client,
    req: config.req,
  })

  return client
}