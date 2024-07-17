import { useEffect } from 'react';
import { useGetTopHeadlinesQuery } from '../redux/services/news';
import { useDispatch, useSelector } from 'react-redux';
import { setArticles } from '../redux/features/newsSlice';
import { NewsItem } from './NewsItem';

export const NewsBoard = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.news.articles);
  const category = useSelector((state) => state.news.category);
  const { data } = useGetTopHeadlinesQuery({
    country: 'us',
    category,
  });

  console.log(data);

  useEffect(() => {
    if (data && data.articles) {
      dispatch(setArticles(data.articles));
    }
  }, [data, dispatch, category]);

  const filteredArticles = articles.filter(
    (news) => news.title !== '[Removed]' && news.description !== '[Removed]'
  );

  return (
    <div>
      <h2 className="text-center mt-2">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      <div className="d-flex flex-wrap justify-content-center">
        {filteredArticles.map((news, index) => {
          return (
            <NewsItem
              key={index}
              author={news.author}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          );
        })}
      </div>
    </div>
  );
};
