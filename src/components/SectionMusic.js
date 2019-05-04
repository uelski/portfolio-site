import React, { Component } from 'react';
import MusicContainer from './MusicContainer';

class Music extends Component {
    render() {
        const musicList = [
            {
                source:"https://bandcamp.com/EmbeddedPlayer/album=3389629478/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/",
                link: "http://masoncos.bandcamp.com/album/throttle-redux",
                text: 'Throttle Redux by Mason Cos',
                type: 'Bandcamp'
            },
            {
                source: "https://bandcamp.com/EmbeddedPlayer/album=3127878489/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/",
                link: "http://masoncos.bandcamp.com/album/das-ep",
                text: "Das EP by Mason Cos",
                type: 'Bandcamp'
            },
            {
                source: "https://bandcamp.com/EmbeddedPlayer/album=1919140128/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/",
                link: "http://masoncos.bandcamp.com/album/time-being",
                text: "Time Being by Mason Cos",
                type: 'Bandcamp'
            },
            {
                source: '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/415156917&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>',
                type: 'Soundcloud'
            },
            {
                source: '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/398002605&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>',
                type: 'Soundcloud'
            },
            {
                source: '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/342738157&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>',
                type: 'Soundcloud'
            }

        ]
        const soundCloudList = musicList.filter(music => music.type === 'Soundcloud').map((music) => {
            return (
                <MusicContainer source={music.source} />
            )
        });
        const bandCampList = musicList.filter(music => music.type === 'Bandcamp').map((music) => {
            return (
                <MusicContainer source={music.source} />
            )
        });
        return(
            <div ref={this.props.refPass} className="page-section section--music flex">
                <div className="music-list-container">
                    <h3>Releases</h3>
                    <div className='music-container'>
                        <iframe width="100%" height="42" src="https://bandcamp.com/EmbeddedPlayer/album=3389629478/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless><a href="http://masoncos.bandcamp.com/album/throttle-redux">Throttle Redux by Mason Cos</a></iframe>
                    </div>
                    <div className='music-container'>
                        <iframe width="100%" height="42" src="https://bandcamp.com/EmbeddedPlayer/album=3127878489/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless><a href="http://masoncos.bandcamp.com/album/das-ep">Das EP by Mason Cos</a></iframe>
                    </div>
                    <div className='music-container'>
                        <iframe width="100%" height="42" src="https://bandcamp.com/EmbeddedPlayer/album=1919140128/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless><a href="http://masoncos.bandcamp.com/album/time-being">Time Being by Mason Cos</a></iframe>
                    </div>
                </div>
            </div>
        )
    }
}

export default Music;