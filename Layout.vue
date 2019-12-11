<template>
<div style="width: 100%; height: 100%">
    <nav class="navbar navbar-dark">
        <ul class="navbar-nav">
        <li class="nav-item">
            <router-link class="nav-link mr-2" :to="$i18nRoute({ name: 'landingpage'})">
                LP
            </router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" :to="$i18nRoute({ name: 'home'})">
                Home
            </router-link>
        </li>
        </ul>
         <a class="navbar-brand mx-auto" href="#">Budgeting App</a>
    </nav>

    <div class="side__menu">
        <ul class="mb-0 h-100 menu__li">
            <li>
                <router-link v-if="cards.length === 0" class="nav-link" :to="$i18nRoute({ name: 'addcard'})">
                    Add Card
                </router-link>
                <router-link v-else class="nav-link" :to="$i18nRoute({ name: 'cards'})">
                    Cards ({{cards.length}})
                </router-link>
            </li>
            <li>Transactions</li>
            <li>Settings</li>
        </ul>
    </div>
    <div class="slot">
        <slot/>
    </div>
</div>
</template>

<script>

export default {
  name: 'Layout',
  computed: {
    cards () {
      return this.$store.state.Cards.cards
    }
  },
}
</script>

<style scoped>
nav {
    background-color: #516477 !important;
    height: 40px;
    color: whitesmoke !important;
    align-content: center
}
.slot {
    padding-left: 150px;
    height: calc(100% - 40px)
}
.navbar-nav {
    flex-direction: row
}
.side__menu {
    width: 150px;
    position: absolute;
    left: 0;
    height: calc(100vh - 40px);
    background-color: #d7e4de
}
.menu__li {
    display: flex;
    flex-direction: column;
    justify-content: center
}
.menu__li  li{
    margin-bottom: 20px;
    list-style-type: none;
}
h4 {
    color: #0c3f63
}
</style>