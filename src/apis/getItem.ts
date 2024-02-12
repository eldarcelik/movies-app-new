import getData from '@/helpers/getData';
import { ContentType, IItem } from '@/types/types';

const formatUrl = (contentType: ContentType, id: string): string =>
  `${process.env.REACT_APP_MOVIES_API_BASE_URL}${contentType}/${id}?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&append_to_response=videos`;

const getItem = async (contentType: ContentType, id: string): Promise<IItem> =>
  getData<IItem>(formatUrl(contentType, id));

export default getItem;
