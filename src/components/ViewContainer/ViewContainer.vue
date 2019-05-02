<template>
  <el-container>
    <el-header>
      <el-menu mode="horizontal" @select="onSelectMenu">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <el-menu-item index="setting" style="float: right">设置</el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>

    <el-dialog
      title="字体及主题设置"
      :visible.sync="settingDialogVisible"
      width="600px"
    >

      <el-form ref="form" :model="settingFormModel" label-width="80px">
        <el-form-item label="主题颜色">
          <el-select v-model="theme" placeholder="请选择主题">
            <el-option v-for="themeItem in settingThemes"
                       :key="themeItem.type"
                       :label="themeItem.name"
                       :value="themeItem.type"/>
          </el-select>
        </el-form-item>

        <el-form-item label="字体">
          <el-select v-model="fontFamily" placeholder="请选择字体">
            <el-option v-for="fontFamilyItem in settingFontFamilies"
                       :key="fontFamilyItem.type"
                       :label="fontFamilyItem.name"
                       :value="fontFamilyItem.type"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="字体">
          <div :style="fontSizeStyle">字体大小样例</div>
          <el-slider v-model="fontSize"
                     :min="9"
                     :max="42"
                     :show-tooltip="false"
          />
        </el-form-item>
      </el-form>

    </el-dialog>
  </el-container>
</template>

<script>
  import {mapMutations}                  from 'vuex'
  import ThemeTypes, {namespace as ThemeNamespace} from '@/store/themeSetting/types';
  import fontFamilies                              from '@/store/themeSetting/fontFamilies';
  import themes                                    from '@/store/themeSetting/themes';
  import MappingFormFields                         from '@/mixin/MappingFormFields';


  export default {
    name    : "ViewContainer",
    mixins  : [MappingFormFields('settingFormModel', ['theme', 'fontSize', 'fontFamily'])],
    data() {
      return {
        settingDialogVisible: true,
        settingFontFamilies : fontFamilies,
        settingThemes       : themes
      }
    },
    computed: {
      settingFormModel: {
        get() {
          const {theme, fontSize, fontFamily} = this.$store.state.ThemeSetting;
          return {theme, fontSize, fontFamily}
        },
        set(val) {
          console.log(val);
          this.changeTheme(val.theme);
          this.changeFontSize(val.fontSize);
          this.changeFontFamily(val.fontFamily);
        }
      },
      fontSizeStyle() {
        return {
          fontSize: `${this.fontSize}px`
        }
      }
    },
    methods : {
      ...mapMutations(ThemeNamespace, {
        changeTheme     : ThemeTypes.MUTATION.CHANGE_THEME,
        changeFontSize  : ThemeTypes.MUTATION.CHANGE_FONT_SIZE,
        changeFontFamily: ThemeTypes.MUTATION.CHANGE_FONT_FAMILY,
      }),

      onSelectMenu(index) {
        if (index === 'setting') {
          this.settingDialogVisible = true;
        }
      }
    }
  }
</script>

<style lang='scss' rel="stylesheet/scss" type="text/scss">

</style>
