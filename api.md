# announcement
query {
  announcement {
    data {
      id
      attributes {
        Title
        createdAt
        content {
          ... on ComponentPostsTextSection {
          	Text
        	}
          ... on ComponentPostsMediaSection {
            Media {
              data {
                attributes {
                  url
                }
              }
            }
          }
          ... on ComponentPostsEmbeded {
            Link
          }
        }
      }
    }
  }
}

# events
query {
  events {
    data {
      attributes {
        Title
        time
        content {
          ... on ComponentPostsTextSection {
            Text
          }
          ... on ComponentPostsMediaSection {
            Media {
              data {
                attributes {
                  url
                }
              }
            }
          }
          ... on ComponentPostsEmbeded {
            Link
          }
        }
      }
    }
  }
}

# NahjulBalagha
query {
  mainPage {
    data {
      attributes {
        NahjulBalagha {
          data {
            attributes {
              media {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

# Quran
query {
  mainPage {
    data {
      attributes {
        Quran {
          data {
            attributes {
              media {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

# QandA
query {
  mainPage {
    data {
      attributes {
        QandA {
          data {
            attributes {
              media {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

# sounds
query {
  sounds {
    data {
      attributes {
        title
        media {
          data {
            attributes {
              url
            }
          }
        }
        categories {
          data {
            attributes {
              name
            }
          }
        }
    }
  }
}


# videos
query {
  videos {
    data {
      attributes {
        title
        media {
          data {
            attributes {
              url
            }
          }
        }
        categories {
          data {
            attributes {
              name
            }
          }
        }
    }
  }
}


# by category
query($category_id: ID, $locale: I18NLocaleCode = "fa") {
  category(id: $category_id, locale: $locale) {
    data {
      attributes {
        name
        videos {
          data {
            attributes {
              title
              media {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
        sounds {
          data {
            attributes {
              title
              media {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
### by category variables example
{
  "category_id": 2,
  "locale": "fa"
}
