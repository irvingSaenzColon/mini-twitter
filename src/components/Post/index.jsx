import { useState } from "react";
import Gallery from "../Gallery";
import GalleryItem from "../GalleryItem";
import sample from '../../assets/profile.webp';
import { LikeIcon, ReplyIcon, ShareIcon, StatsIcon } from "../../Icons";
import './Post.css';

export default function Post({post}){
    const {id, name, nickname, profile, date, description, images, likes, retweet, view, reply} = post;

    const onLike = (event) => {
        console.log('Like dado');
    }

    const onRetweet = (event) => {
        console.log('compartiendo');
    }

    return(
        <article className="post">
            <section className="post__header">
                <img src={profile} alt="" />
                <section>
                    <p className="post__user">{name} <span>@{nickname}</span> <span>· {date}</span></p>
                    <p className="post__description">{description}</p>
                </section>
            </section>
            <section className={`post__content ${!images.length ? 'inactive' : ''}`}>
                <Gallery length={images.length}>
                    {
                        images.map(image => ( <GalleryItem galleryItem={image} /> ))
                    }
                </Gallery>
            </section>
            <section className="post__footer">
                    <button className="post__interaction post__interaction--blue">
                        <div>
                            <ReplyIcon stroke={'var(--silent-night)'} />
                        </div>
                        {reply}
                    </button>
                    <button className="post__interaction post__interaction--green"  onClick={onRetweet}>
                        <div>
                            <ShareIcon stroke={'var(--silent-night)'} />
                        </div>
                        {retweet}
                    </button>
                    <button className="post__interaction post__interaction--red"  onClick={onLike}>
                        <div>
                            <LikeIcon stroke={'var(--silent-night)'} />
                        </div>
                        {likes}
                    </button>
                    <button className="post__interaction post__interaction--blue" >
                        <div>
                            <StatsIcon stroke={'var(--silent-night)'} />
                        </div>
                        {view}
                    </button>
                </section>
        </article>
    )
}