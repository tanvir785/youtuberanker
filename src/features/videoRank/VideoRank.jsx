import React from 'react';
import { Statistic, Card, Label, Image } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import { selectYoutubeVideo, updateRedirect } from '../reducers/APIReducer';
import Rating from '@material-ui/lab/Rating';
import { useDispatch } from 'react-redux';
import './VideoRank.scss'
import SearchBar from '../../components/SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: theme.spacing(3),
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        whiteSpace: 'nowrap',
        marginBottom: theme.spacing(1),
    },
    divider: {
        margin: theme.spacing(2, 0),
    },
}));


const numFormatted = (num) => {

    if (num >= 1000000000) {
        return (num / 1000000000).toFixed(2).replace(/\.0$/, '') + 'B';
    }
    if (num >= 1000000) {
        return (num / 1000000).toFixed(2).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(2).replace(/\.0$/, '') + 'K';
    }
    return num;
}

export default function VideoRank() {

    const videoDetail = useSelector(selectYoutubeVideo);
    const dispatch = useDispatch();
    const classes = useStyles();
    dispatch(updateRedirect(null))

    if (videoDetail.youtubeVideo != null) {

        let likeCount = new Number(videoDetail.youtubeVideo.items[0].statistics.likeCount);
        let dislikeCount = new Number(videoDetail.youtubeVideo.items[0].statistics.dislikeCount);
        let totalCount = new Number(likeCount + dislikeCount);
        let ranking = new Number((likeCount / totalCount) * 10).toFixed(2);
        let views = numFormatted(videoDetail.youtubeVideo.items[0].statistics.viewCount);
        let comments = numFormatted(videoDetail.youtubeVideo.items[0].statistics.commentCount);


        return (
            <>
                <div className='pageSearch'>
                    <SearchBar videoDetail={videoDetail}></SearchBar>
                </div>
                <div>
                    <Card>
                        <Card.Content>
                            <Card.Header>{videoDetail.youtubeVideo.items[0].snippet.title}</Card.Header>
                            <Card.Meta>{videoDetail.youtubeVideo.items[0].snippet.channelTitle}</Card.Meta>
                            <Image src={videoDetail.youtubeVideo.items[0].snippet.thumbnails["high"].url} wrapped ui={false} />
                            <Grid className="__ranking" container spacing={3}>
                                <Grid item xs={3}>
                                    <Rating name="half-rating-read" max={10} value={ranking} precision={0.2} size="large" readOnly />
                                </Grid>
                                <Grid item xs={3}>
                                    <Label as='a'>{ranking}/10</Label>
                                </Grid>
                            </Grid>
                            <br />
                            <Statistic>
                                <Statistic.Label>Views</Statistic.Label>
                                <Statistic.Value>{views}</Statistic.Value>
                            </Statistic>
                            <br />
                            <Statistic>
                                <Statistic.Label>Comments Count</Statistic.Label>
                                <Statistic.Value>{comments}</Statistic.Value>
                            </Statistic>
                        </Card.Content>
                    </Card>
                </div>
            </>
        )

    }
    else {
        return (
            <Link> </Link>
        )

    }
}