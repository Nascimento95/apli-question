import styled from "styled-components";
import colors from '../../utils/style/colors';

export const ContainerHome = styled.div`
    margin: 90px 62px 0px 65px;
    width: 1313;
    height: 824px;
    background-color: ${colors.backgroundLight};
    display: flex;
`
export const ContainerTitle = styled.div`
    width: 552px;
    height: 249px;
    margin: 176px 45px 399px 98px;
    h2{
        font-size: 50px;
        font-weight: 700 bold;
        line-height: 80.25px;
    }
`

export const ContainerCard = styled.div`
    width: 541px;
    height: 506px;
    margin: 139px 77px 179px 0px;
    /* border: 1px solid black; */
    position: relative;
`
export const MainCard = styled.div`
    width: 339px;
    height: 386px;
    border: 10px solid #E6E6E6;
    border-radius: 20px;
    position: relative;
    top:100px;
    left: 173px;
    z-index: 1;
    background: white;
`
export const MainCard1 = styled.div`
    width: 339px;
    height: 398.7px;
    border: 10px solid #E6E6E6;
    border-radius: 20px;
    top: -403px;
    left: 14px;
    transform: rotate(330deg);
    position: relative;
    z-index: 0;
    .header-main-card{
        display: flex;
        margin-top: 42.47px;
        .user-logo{
            /* border:1px solid black; */
            width: 50%;
            .back{
                width: 98.34px;
                height: 78.1px;
                background: rgba(209, 209, 209, 0.8);
                margin-left: 37px;
                .head-logo{
                    position: relative;
                    bottom: 18px;
                    left: 11px;
                    z-index: 1;
                }
            }
        }
    }
    .bar-color-icon2{
            display: flex;
            flex-direction: column;
            justify-content: center;
            .bar-color-little{
                width: 112px;
                margin-bottom: 7.90px;
            }
    }
`
export const MainCardContent = styled.div`
    width: 337px;
    height: 384px;
    /* border: 1px solid black; */
    border-radius: 10px;
    z-index: 1;
    .header-main-card{
        display: flex;
        margin-top: 42.47px;
        .user-logo{
            /* border:1px solid black; */
            width: 50%;
            .back{
                width: 98.34px;
                height: 78.1px;
                background: rgba(209, 209, 209, 0.8);
                margin-left: 37px;
                .head-logo{
                    position: relative;
                    bottom: 18px;
                    left: 11px;
                    z-index: 1;
                }
                .arceau{
                    position: relative;
                    z-index: 2;
                    bottom: 172px;
                    left: 4px;
                }
                .left-head{
                    position: relative;
                    z-index: 3;
                    bottom: 202px;
                }
                .right-head{
                    position: relative;
                    z-index: 3;
                    left: 61px;
                    bottom: 202px;
                }
                .hair{
                    position: relative;
                    z-index: 2;
                    bottom: 127px;
                    left: 23px;
                }
                .left{
                    position: relative;
                    bottom:90px;
                    right: 40px;
                    z-index: 2;
                }
                .right{
                    position: relative;
                    bottom:90px;
                    right: 23px;
                    z-index: 2;
                }
                .nose{
                    position: relative;
                    bottom:98px;
                    left: 47px;
                    z-index: 2;
                }
                .body-logo{
                    position: relative;
                    top: -28px;
                    left: 29px;
                }
                .corde{
                    position: relative;
                    top: -36px;
                    right: 48px;
                    z-index: 0;
                }
                
            }
        }
        .bar-color-icon{
            display: flex;
            flex-direction: column;
            justify-content: center;
            /* border: 1px solid black; */
            .bar-color-little{
                width: 112px;
                margin-bottom: 7.90px;
            }
        }
    }
    .container-round-and-bar{
        display: flex;
        justify-content: center;
        align-items: center;
        /* border: 1px solid black; */
        margin-top: 28.3px;
    }
    .container-round-and-bar1{
        display: flex;
        justify-content: center;
        margin-top: 21px;
    }

    .container-bar-icon{
        margin-left: 23px;
        width: 171px;
    }
`