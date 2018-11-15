<template>
    <div id="main-menu" class="main-menu onepage-nav collapse navbar-collapse float-right">
        <nav>
            <ul>
                <li class="active"
                v-for="item in list"
                :key="item.id"
                >
                <router-link :to="item.link">{{ item.text }}</router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    list: Array
  }
}
</script>

<style lang="scss" scoped>
.main-menu {
    margin: 15px 0;
    padding: 0;
    nav {
        ul {
            li {
                display: block;
                float: left;
                margin-left: 40px;
                &:first-child {
                    margin-left: 0;
                }
                &:active {
                    a {
                        background: #71b100;
                        background: -moz-linear-gradient(left, #71b100 0%, #0071b0 100%);
                        background: -webkit-gradient(left top, right top, color-stop(0%, #71b100), color-stop(100%, #0071b0));
                        background: -webkit-linear-gradient(left, #71b100 0%, #0071b0 100%);
                        background: -o-linear-gradient(left, #71b100 0%, #0071b0 100%);
                        background: -ms-linear-gradient(left, #71b100 0%, #0071b0 100%);
                        background: linear-gradient(to right, #71b100 0%, #0071b0 100%);
                        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$theme-color-1', endColorstr='$theme-color-2', GradientType=1 );
                        background-clip: text;
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }
                }
                a {
                    &:hover {
                        background: #71b100;
                        background: -moz-linear-gradient(left, #71b100 0%, #0071b0 100%);
                        background: -webkit-gradient(left top, right top, color-stop(0%, #71b100), color-stop(100%, #0071b0));
                        background: -webkit-linear-gradient(left, #71b100 0%, #0071b0 100%);
                        background: -o-linear-gradient(left, #71b100 0%, #0071b0 100%);
                        background: -ms-linear-gradient(left, #71b100 0%, #0071b0 100%);
                        background: linear-gradient(to right, #71b100 0%, #0071b0 100%);
                        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$theme-color-1', endColorstr='$theme-color-2', GradientType=1 );
                        background-clip: text;
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }
                }
            }
        }
    }
}
@media only screen and (max-width: 767px) {
    .main-menu {
        margin: 0;
        float: left;
        width: 100%;
        nav {
            padding: 15px 0;
            ul {
                li {
                    margin-left: 0;
                    float: none;
                }
            }
        }
    }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
    .main-menu nav ul li {
        margin-left: 25px;
    }
}
@media screen and (min-width: 0\0) and (min-resolution: 72dpi) {
    .main-menu nav ul li a:hover, .main-menu nav ul li.active a {
        filter: none;
        background-color: transparent;
        background-image: none;
        color: #71b100;
    }
}
</style>
