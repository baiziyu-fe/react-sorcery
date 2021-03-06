import * as React from 'react';
import headerStyle from './header.module.less'
import { pages } from '@/route.config.json';
import { Link } from 'react-router-dom';

const Search = () => {
  const [result, setResult] = React.useState(pages);
  const [visible, setVisible] = React.useState(false);
  const inputRef = React.useRef();
  const resRef = React.useRef();
  const search = () => {
    setVisible(true)
    const value = inputRef.current.value.toLowerCase().trim();
    if (value) {
      const temp = result.filter(page => {
        const filePath = page.filePath.toLowerCase();
        return filePath.includes(value);
      });
      setResult(temp);
    } else {
      setResult(pages)
    }
  }

  React.useEffect(() => {
    document.addEventListener('click', handleSearchResVisible);
    return () => document.removeEventListener('click', handleSearchResVisible);
  }, []);

  const handleSearchResVisible = (e) => {
    if (!resRef.current) return;
    if (inputRef.current.contains(e.target)) return;
    if(!resRef.current.contains(e.target)) {
      setVisible(false);
    }
  }

  const isSearch = result.length !== pages.length;
  return (
    <div className={headerStyle['doc-search']}>
      <div className="doc-search-box">
        <input
          onFocus={() => setVisible(true)}
          onChange={search}
          ref={inputRef}
          placeholder="查找对应内容"
          className="doc-search-input"
          type="text"
        />
      </div>
      {
        visible && (
          <div
            ref={resRef}
            className={headerStyle["doc-search-result"]}
          >
            <div className={headerStyle["split-box"]}>
              {
                isSearch ? '为你找到以下内容：' : '看看这些内容吧：'
              }
            </div>
            <ol>
              {
                result.map(item => {
                  return (
                    <li key={item.md_key}>
                      <Link to={item.path}>{item.filePath}</Link>
                    </li>
                  )
                })
              }
            </ol>
          </div>

        )
      }
    </div>
  )
};

export default Search;