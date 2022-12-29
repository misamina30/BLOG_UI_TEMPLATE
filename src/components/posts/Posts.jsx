import posts from '../../constants/posts.json';
import Post from './post/Post';
import styles from './Posts.module.css';

const Posts = () => {
	return (
		<div className={styles.container}>
			{posts.map((post, index) => (
				<Post
					key={index}
					category={post.category}
					image={post.image}
					time={post.time}
					title={post.title}
					overview={post.overview}
				/>
			))}
		</div>
	);
};

export default Posts;
