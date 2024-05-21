//package com.example.springboot.entity;
//
//import com.amazonaws.services.dynamodbv2.datamodeling.*;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import lombok.Setter;
//
//@Getter
//@Setter
//@NoArgsConstructor
//@DynamoDBTable(tableName="MelodyMap_result")
//public class MelodyMap_result {
//
//    @DynamoDBHashKey(attributeName = "result_choice")
//    private String resultChoice;
//
//   // @DynamoDBAttribute(attributeName = "music")
//    @DynamoDBDocument
//    public static class Music {
//        private String musicTitle;
//        private String musicLyric;
//        private String musicSinger;
//        private String musicGenre;
//        private String musicImage;
//
//        // Getters and Setters for Music attributes
//        public String getMusicTitle() { return musicTitle; }
//        public void setMusicTitle(String musicTitle) { this.musicTitle = musicTitle; }
//
//        public String getMusicLyric() { return musicLyric; }
//        public void setMusicLyric(String musicLyric) { this.musicLyric = musicLyric; }
//
//        public String getMusicSinger() { return musicSinger; }
//        public void setMusicSinger(String musicSinger) { this.musicSinger = musicSinger; }
//
//        public String getMusicGenre() { return musicGenre; }
//        public void setMusicGenre(String musicGenre) { this.musicGenre = musicGenre; }
//
//        public String getMusicImage() { return musicImage; }
//        public void setMusicImage(String musicImage) { this.musicImage = musicImage; }
//    }
//
//   // @DynamoDBAttribute(attributeName = "place")
//    @DynamoDBDocument
//    public static class Place {
//        private String poiRegion;
//        private String poiName;
//        private String poiTag;
//        private String poiDesc;
//        private String imgName;
//
//        // Getters and Setters for Place attributes
//        public String getPoiRegion() { return poiRegion; }
//        public void setPoiRegion(String poiRegion) { this.poiRegion = poiRegion; }
//
//        public String getPoiName() { return poiName; }
//        public void setPoiName(String poiName) { this.poiName = poiName; }
//
//        public String getPoiTag() { return poiTag; }
//        public void setPoiTag(String poiTag) { this.poiTag = poiTag; }
//
//        public String getPoiDesc() { return poiDesc; }
//        public void setPoiDesc(String poiDesc) { this.poiDesc = poiDesc; }
//
//        public String getImgName() { return imgName; }
//        public void setImgName(String imgName) { this.imgName = imgName; }
//    }
//
//    @DynamoDBAttribute(attributeName = "count")
//    private Integer count;
//}
