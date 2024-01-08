import { API_BASE_URL, API_KEY } from '@/constants/constantValues';
import getData from '@/helpers/getData';
import { ContentType, IItem } from '@/types/types';

const formatUrl = (contentType: ContentType, id: string): string =>
  `${API_BASE_URL}${contentType}/${id}?api_key=${API_KEY}&append_to_response=videos`;

const getItem = async (contentType: ContentType, id: string): Promise<IItem> =>
  getData<IItem>(formatUrl(contentType, id));

export default getItem;
