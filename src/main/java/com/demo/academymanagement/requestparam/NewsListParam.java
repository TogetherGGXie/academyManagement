package com.demo.academymanagement.requestparam;

public class NewsListParam {

    private Integer page;

    private Integer pageSize;

    private Integer newsType;

    private String startTime;

    private String endTime;

    private String title;

    public Integer getPage() {
        return page;
    }

    public void setPage(Integer page) {
        this.page = page;
    }

    public Integer getPageSize() {
        return pageSize;
    }

    public void setPageSize(Integer pageSize) {
        this.pageSize = pageSize;
    }

    public Integer getNewsType() {
        return newsType;
    }

    public void setNewsType(Integer newsType) {
        this.newsType = newsType;
    }

    @Override
    public String toString() {
        return "NewsListParam{" +
                "page=" + page +
                ", pageSize=" + pageSize +
                ", newsType=" + newsType +
                '}';
    }
}